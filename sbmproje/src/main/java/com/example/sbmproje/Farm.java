package com.example.sbmproje;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Farm {

  @Id
  private @GeneratedValue(strategy=GenerationType.AUTO) long id;
  private String farmName;
  private String farmAddress;
  private String farmOwner;
  private String farmProduct;

  private Farm() {}

  public Farm(String farmName, String farmAddress, String farmOwner, String farmProduct) {
    this.farmName = farmName;
    this.farmAddress = farmAddress;
    this.farmOwner = farmOwner;
    this.farmProduct = farmProduct;
  }

  @Override
  public boolean equals(Object o) {
      if (this == o) return true;
      if (o == null || getClass() != o.getClass()) return false;
      Farm user = (Farm) o;
      return Objects.equals(id, user.id) &&
              Objects.equals(farmName, user.farmName) &&
              Objects.equals(farmAddress, user.farmAddress) &&
              Objects.equals(farmOwner, user.farmOwner) &&
              Objects.equals(farmProduct, user.farmProduct);
  }

  @Override
    public int hashCode() {
        return Objects.hash(id, farmName, farmAddress, farmOwner, farmProduct);
    }
    
    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("User{");
        sb.append("id=").append(id);
        sb.append(", farmName='").append(farmName).append('\'');
        sb.append(", farmAddress='").append(farmAddress).append('\'');
        sb.append(", farmOwner='").append(farmOwner).append('\'');
        sb.append(", farmProduct='").append(farmProduct).append('\'');
        sb.append('}');
        return sb.toString();
    }

  public Long getId() {
    return id;
  }

  public void setID(Long id){
      this.id = id;
  }

  public String getFarmName() {
    return farmName;
  }

  public void setFarmName(String farmName){
      this.farmName = farmName;
  }

  public String getFarmAddress() {
    return farmAddress;
  }

  public void setFarmAddress(String farmAddress){
    this.farmAddress = farmAddress;
  }

  public String getFarmOwner() {
    return farmOwner;
  }

  public void setFarmOwner(String farmOwner){
      this.farmOwner = farmOwner;
  }

  public String getFarmProduct() {
    return farmProduct;
  }

  public void setFarmProduct(String farmProduct){
      this.farmProduct = farmProduct;
  }
}