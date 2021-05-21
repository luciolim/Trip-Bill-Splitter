package com.split.expenses.domain.services;

import com.split.expenses.domain.dtos.ExpenseDto;
import com.split.expenses.domain.dtos.SummaryDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ExpenseService {
    public Boolean existTrip(String tripId);
    public ExpenseDto createExpense(ExpenseDto expenseDto);
    public ExpenseDto closeTrip(String tripId);
    public Page<ExpenseDto> expenseList(String tripId, Pageable paging);
    public SummaryDto resumeTrip(String tripId);
}
