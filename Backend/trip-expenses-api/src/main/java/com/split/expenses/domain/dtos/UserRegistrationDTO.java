package com.split.expenses.domain.dtos;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.split.expenses.domain.entities.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonAutoDetect(fieldVisibility= JsonAutoDetect.Visibility.ANY)
public class UserRegistrationDTO extends User {

    private Long id;

    private String name;
    private String email;
    private String password;



    public User toUser() {
        return new User(getName(), getEmail(), getPassword());
    }



}
