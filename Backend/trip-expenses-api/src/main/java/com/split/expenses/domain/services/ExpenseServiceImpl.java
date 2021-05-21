package com.split.expenses.domain.services;

import com.split.expenses.domain.dtos.ExpenseDto;
import com.split.expenses.domain.dtos.SummaryDto;
import com.split.expenses.domain.entities.Expense;
import com.split.expenses.domain.enums.StatusEnum;
import com.split.expenses.domain.mappers.ExpenseMapper;
import com.split.expenses.domain.repositories.ExpenseRepository;
import com.split.expenses.domain.exceptions.UnprocessableEntityException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.text.DecimalFormat;
import java.util.Iterator;
import java.util.List;

@Service
public class ExpenseServiceImpl implements ExpenseService {

    @Autowired
    ExpenseRepository expenseRepository;

    @Autowired
    ExpenseMapper expenseMapper;

    /*
    Method that checks if the trip exists and returns a true or false boolean
     */
    @Override
    public Boolean existTrip(String tripId){
        return expenseRepository.existsByTripId(tripId);
    }

    /*
       method that creates the expense, assembles the entity and the return dto
     */
    @Override
    public ExpenseDto createExpense(ExpenseDto expenseDto) {

        var expense = expenseRepository.findByTripIdAndStatus(expenseDto.getTripId(), StatusEnum.INACTIVE);

        /*
         In this condition, we check whether the tripid with inactive status is registered with the bank in order not to allow
         expense registration for a trip already closed
         */
        if (!expense.isPresent()) {
            var expenseDtoToExpense = expenseMapper.expenseDtoToExpense(expenseDto);
            expenseDtoToExpense.setStatus(StatusEnum.ACTIVE);
            expenseRepository.save(expenseDtoToExpense);
            return expenseMapper.expenseToExpenseDto(expenseDtoToExpense);
        }else{
            throw new UnprocessableEntityException();
        }
    }

    /*
        Method to close the trip and save it on ddos ​​basis with inactive status
     */
    @Override
    public ExpenseDto closeTrip(String tripId) {
        Expense expense = Expense.builder()
                .tripId(tripId)
                .status(StatusEnum.INACTIVE)
                .build();
        return expenseMapper.expenseToExpenseDto(expenseRepository.save(expense));
    }

    /*
        Method that searches the database for all expenses with active status for the trip consulted
        and returns in a paginated way
     */
    @Override
    public Page<ExpenseDto> expenseList(String tripId, Pageable paging){
        var expense = expenseRepository.findAllByTripIdAndStatus(tripId, StatusEnum.ACTIVE, paging);
        var expenseDto =  expenseMapper.expenseListToExpenseDto(expense);
        Page<ExpenseDto> pages = new PageImpl<ExpenseDto>(expenseDto, expense.getPageable(), expense.getTotalElements());
        return pages;
    }

    /*
        Method that summarizes expenses, and calculates lower, higher, total, average expenses
     */
    @Override
    public SummaryDto resumeTrip(String tripId) {
        var expense = expenseRepository.findAllExpenseTrip();
        var listExpense = List.of(expense);
        var summary = new SummaryDto();

        Iterator itr = listExpense.iterator();
        while (itr.hasNext()) {
            Object[] obj = (Object[]) itr.next();
            summary.setTotalAmount((BigDecimal) obj[0]);
            summary.setExpenseQuantity((BigInteger) obj[1]);
            summary.setLowerExpense((BigDecimal) obj[2]);
            summary.setBiggestExpense((BigDecimal) obj[3]);
            verifyMedia(summary, obj);
        }
        return summary;
    }

    /*
        Method that calculates the average
     */
    private void verifyMedia(SummaryDto summary, Object[] obj) {
        DecimalFormat deciFormat = new DecimalFormat();

        deciFormat.setMaximumFractionDigits(2);
        var format = deciFormat.format(obj[4]);
        if (summary.getExpenseQuantity().compareTo(BigInteger.ONE) > 0) {
            summary.setAverageExpense(format);
        } else {
            summary.setAverageExpense(deciFormat.format(obj[0]));
        }
    }
}
