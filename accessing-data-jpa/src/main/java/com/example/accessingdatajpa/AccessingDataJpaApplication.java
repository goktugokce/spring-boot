package com.example.accessingdatajpa;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class AccessingDataJpaApplication {

  private static final Logger log = LoggerFactory.getLogger(AccessingDataJpaApplication.class);

  public static void main(String[] args) {
    SpringApplication.run(AccessingDataJpaApplication.class);
  }

  @Bean
  public CommandLineRunner demo(FarmRepository repository) {
    return (args) -> {
      // save a few customers
      repository.save(new Farm("PeroFarm", "Samsun", "Perim", "Cilek"));
      repository.save(new Farm("GokoFarm", "Samsun", "Goktug", "Cilek"));
      repository.save(new Farm("HicoFarm", "Izmir", "Hicran", "Karpuz"));
      repository.save(new Farm("HenryFarm", "Paris", "Henry", "Kiraz"));
      repository.save(new Farm("PeroFarm1", "Sivas", "Perim", "Patates"));
      repository.save(new Farm("PeroFarm2", "Istanbul", "Perim", "Kivi"));
      repository.save(new Farm("GokoFarm1", "Tokat", "Goktug", "Kavun"));

      // fetch all farms
      log.info("Customers found with findAll():");
      log.info("-------------------------------");
      for (Farm farm : repository.findAll()) {
        log.info(farm.toString());
      }
      log.info("");

      // fetch an individual customer by ID
      Farm farm = repository.findById(1L);
      log.info("Customer found with findById(1L):");
      log.info("--------------------------------");
      log.info(farm.toString());
      log.info("");
    };
  }

}