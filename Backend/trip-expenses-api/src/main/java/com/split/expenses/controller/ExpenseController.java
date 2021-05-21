package com.split.expenses.controller;

import com.split.expenses.domain.dtos.ExpenseDto;
import com.split.expenses.domain.dtos.SummaryDto;
import com.split.expenses.domain.exceptions.ExpenseNotFoundException;
import com.split.expenses.domain.exceptions.InternalServerErrorException;
import com.split.expenses.domain.exceptions.UnprocessableEntityException;
import com.split.expenses.domain.services.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ExpenseController {

    @Autowired
    ExpenseService expenseService;

    /*
        Trip creation endpoint, receive with path variable, and receive as body the dto
        Annotation "@Valid" to already validate the data being passed to this method
        @RequestBody The annotation that indicates a method parameter must be associated with the body of the web request.
     */
    @PostMapping("/{trip}/expense")
    public ResponseEntity<ExpenseDto> createTrip(@PathVariable String trip, @Valid @RequestBody ExpenseDto expenseDto) {
        /*
            Try, catch is like a conditional
            f there is a problem with the flow within the try, an exception will be thrown and the user receives a
            unprocessableEnity.
            catch only occurs if the try fails

            Within the try we are assembling a response of type ResponseEntity, before returning the call
            we call the service layer to create the expense.
         */
        try{
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(expenseService.createExpense(expenseDto));
        }catch (RuntimeException e){
            throw new UnprocessableEntityException();
        }
    }

    /*
        Annotation for mapping HTTP GET requests to specific handler methods.
        @PathVariable annotation to indicate the url parameter
        RequestParam Annotation indicating that a method parameter should be linked to a web request parameter.
        Page indicates the beginning of the page, that is, from which page the search should start. If no value is entered
        it takes the default value 0
        size indicates the size of the page, if no value is passed in the api it takes the default value
     */
    @GetMapping("/{trip}")
    public ResponseEntity<List<ExpenseDto>> consultTrip(@PathVariable String trip,
                                                        @RequestParam(defaultValue = "0") int page,
                                                        @RequestParam(defaultValue = "100") int size){
        try{
            /*
                Pageable is used for pagination, we set up pagination based on what we received in the request
             */
            Pageable paging = PageRequest.of(page, size);

            /*
                var -> From java 11 you do not need to specify the type of the variable
                We are called the expenseList method which will return a list of trips with the tag
                in a paginated way at the bank
             */

            var expense = expenseService.expenseList(trip, paging);

            /*
                Here we set up a Map and set the response with the data, the contents of the list are in expense.get ()
                so we set up the content within the data.
                currentPage pays the current page where you are
                totalItems takes the total of elements within the "data"
                totalPages the total of pages.

                HttpStatus.PARTIAL_CONTENT -> This return code indicates that it was partially returned
                as it is a paged search it is necessary to return a code that indicates that the total content has not been returned
                the rest are on the following pages.
                The success status response code
                206 Partial Content indicates that the request was successful
                and the body contains the sequence (in bytes) of the data, as described in the Range header of the request.
             */
            Map<String, Object> response = new HashMap<>();
            response.put("data", expense.get());
            response.put("currentPage", expense.getNumber());
            response.put("totalItems", expense.getTotalElements());
            response.put("totalPages", expense.getTotalPages());
            return new ResponseEntity(response, HttpStatus.PARTIAL_CONTENT);
        } catch (Exception e){
            throw new InternalServerErrorException();
        }
    }

    /*
        CloseTrip -> method to close the trip
        existTrip -> returns a Boolean value (true or false)
        if true, the call to the closeTrip service layer is made
        otherwise it returns a not found -> trip not found
     */
    @PostMapping("/{trip}/close")
    public ResponseEntity<ExpenseDto> closeTrip(@PathVariable String trip){
        if (expenseService.existTrip(trip)){
           return ResponseEntity.status(HttpStatus.CREATED).body(expenseService.closeTrip(trip));
        }
        throw new ExpenseNotFoundException();
    }

    /*
        resumeTrip -> summarizes the trip
        First check if the tripId exists, if it exists calls the service layer to calculate the trip summary data
        if notFound does not return
     */
    @GetMapping("/{trip}/summary")
    public ResponseEntity<SummaryDto> resumeTrip(@PathVariable String trip){
        if(expenseService.existTrip(trip)){
            return ResponseEntity.ok().body(expenseService.resumeTrip(trip));
        }
        throw  new ExpenseNotFoundException();
    }
}
