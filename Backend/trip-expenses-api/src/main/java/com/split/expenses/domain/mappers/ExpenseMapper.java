package com.split.expenses.domain.mappers;

import com.split.expenses.domain.dtos.ExpenseDto;
import com.split.expenses.domain.entities.Expense;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ExpenseMapper {
    Expense expenseDtoToExpense(ExpenseDto expenseDto);

    ExpenseDto expenseToExpenseDto(Expense expense);

    List<ExpenseDto> expenseListToExpenseDto(Page<Expense> expense);
}
