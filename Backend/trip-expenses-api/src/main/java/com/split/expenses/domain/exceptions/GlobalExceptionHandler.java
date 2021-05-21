package com.split.expenses.domain.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/*
    Global handler -> catches global exceptions. That is, all exceptions mapped to this class
    will send its respective message.
    If in the service layer, for example, you give the exception InternalServerErrorException, it will be returned as
    api response to msg "System failure, please try again later"
    and for the other exceptions mapped in this class it is the same
 */
@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(InternalServerErrorException.class)
    public ResponseEntity<Object> handleInternalServerErrorException(
            InternalServerErrorException internalServerErrorException){
        return new ResponseEntity("System failure, please try again later", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(UnprocessableEntityException.class)
    public ResponseEntity<Object> handleUnprocessableEntityException(
            UnprocessableEntityException unprocessableEntityException){
        return new ResponseEntity("Trip already closed", HttpStatus.UNPROCESSABLE_ENTITY);
    }

    @ExceptionHandler(ExpenseNotFoundException.class)
    public ResponseEntity<Object> handleExpenseNotFoundExceptionException(
            ExpenseNotFoundException notFoundException){
        return new ResponseEntity("Trip does not exist in the system", HttpStatus.NOT_FOUND);
    }


}
