package com.split.expenses.domain.mappers;

import com.split.expenses.domain.dtos.ExpenseDto;
import com.split.expenses.domain.entities.Expense;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class ExpenseMapperImpl implements ExpenseMapper {

    /*
        Method that maps the data to the entity in the database
     */
    @Override
    public Expense expenseDtoToExpense(ExpenseDto expenseDto) {
        if (expenseDto == null) {
            return null;
        } else {
            return Expense.builder()
                    .tripId(expenseDto.getTripId())
                    .amount(expenseDto.getAmount())
                    .description(expenseDto.getDescription())
                    .username(expenseDto.getUsername()).build();
        }
    }

    /*
        Method that maps the entity to the dto
     */
    @Override
    public ExpenseDto expenseToExpenseDto(Expense expense) {
        if (expense == null) {
            return null;
        } else {
            return ExpenseDto.builder()
                    .tripId(expense.getTripId())
                    .amount(expense.getAmount())
                    .description(expense.getDescription())
                    .username(expense.getUsername())
                    .build();
        }
    }

    /*
        Method that maps an entity list to the dto
     */
    @Override
    public List<ExpenseDto> expenseListToExpenseDto(Page<Expense> expense) {
        if (expense == null) {
            return null;
        } else {
            List<ExpenseDto> list = new ArrayList();
            Iterator var3 = expense.iterator();

            while(var3.hasNext()) {
                Expense expense1 = (Expense)var3.next();
                list.add(this.expenseToExpenseDto(expense1));
            }

            return list;
        }
    }
}
