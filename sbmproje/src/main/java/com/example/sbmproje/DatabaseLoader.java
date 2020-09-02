package com.example.sbmproje;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

@Component
public class DatabaseLoader implements CommandLineRunner { 

	private final FarmRepository repository;

	@Autowired
	public DatabaseLoader(FarmRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception { 
		this.repository.save(new Farm("GoktugFarm", "Samsun", "Goktug", "Kavun"));
		this.repository.save(new Farm("GoktugFarm2", "Samsun2", "Goktug", "Kavun2"));
	}
}