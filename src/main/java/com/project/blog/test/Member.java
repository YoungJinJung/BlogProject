package com.project.blog.test;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Member {
    private int id;
    private String userName;
    private String password;
    private String email;
}
