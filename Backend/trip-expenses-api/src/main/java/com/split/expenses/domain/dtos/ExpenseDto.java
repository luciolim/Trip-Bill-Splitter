
package com.split.expenses.domain.dtos;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

/*
@Builder, @AllArgsConstructor, @NoArgsConstructor, @Data
    -> These are lombok annotations, so there is no need to create getters, setters, toString and hashes.
@JsonInclude -> avoid returning null in response
 */
@Builder
@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ExpenseDto {
    @NotNull(message = "TripId cannot be null")
    @NotBlank(message = "TripId cannot be empty")
    private String tripId;
    @NotNull(message = "Amount cannot be null")
    private BigDecimal amount;
    @NotNull(message = "Description cannot be null")
    private String description;
    @NotNull(message = "Username cannot be null")
    @NotBlank(message = "Username cannot be empty")
    private String username;
}
