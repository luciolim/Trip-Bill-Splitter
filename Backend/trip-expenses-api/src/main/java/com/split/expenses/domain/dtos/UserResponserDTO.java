package com.split.expenses.domain.dtos;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.split.expenses.domain.entities.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@JsonAutoDetect(fieldVisibility= JsonAutoDetect.Visibility.ANY)
public class UserResponserDTO {

    private Long id;

    private String name;
    private String email;
    private String password;

    public UserResponserDTO(String name, String email, String password){
        this.name = name;
        this.email = email;
        this.password = password;
    }


    public static UserResponserDTO toDTO(User user) {
        return new UserResponserDTO(user.getName(), user.getEmail(), user.getPassword());
    }

}
