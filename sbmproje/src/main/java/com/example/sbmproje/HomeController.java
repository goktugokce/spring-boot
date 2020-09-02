package com.example.sbmproje;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class HomeController {

    @Autowired
    private FarmRepository farmRepository;

    @GetMapping("/farms")
    public List < Farm > getAllFarms() {
        return farmRepository.findAll();
    }

    @PostMapping("/farms")
    public Farm createFarm(@RequestBody Farm farm) {
        return farmRepository.save(farm);
    }

    @PutMapping("/farms/{id}")
    public ResponseEntity < Farm > updateFarm(@PathVariable Long id, @RequestBody Farm farmDetails) {
        Farm farm = farmRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Farm not exist with id :" + id));

        farm.setFarmName(farmDetails.getFarmName());
        farm.setFarmAddress(farmDetails.getFarmAddress());
        farm.setFarmOwner(farmDetails.getFarmOwner());
        farm.setFarmProduct(farmDetails.getFarmProduct());

        Farm updatedFarm = farmRepository.save(farm);
        return ResponseEntity.ok(updatedFarm);
    }

    @DeleteMapping("/farms/{id}")
    public ResponseEntity < Map < String, Boolean >> deleteFarm(@PathVariable Long id) {
        Farm farm = farmRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Farm not exist with id :" + id));

        farmRepository.delete(farm);
        Map < String, Boolean > response = new HashMap < > ();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}