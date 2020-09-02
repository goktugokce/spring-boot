package com.example.accessingdatajpa;

//import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface FarmRepository extends CrudRepository<Farm, Long> {

  Farm findById(long id);
}