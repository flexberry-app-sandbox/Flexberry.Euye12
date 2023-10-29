package Euye12.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Euye12.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Улица
 */
@Entity(name = "IISEuye12Улица")
@Table(schema = "public", name = "Улица")
public class Ulica {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ИмяУлицы")
    private String имяулицы;

    @OneToMany(mappedBy = "ulica", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Gorod> gorods;


    public Ulica() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getИмяУлицы() {
      return имяулицы;
    }

    public void setИмяУлицы(String имяулицы) {
      this.имяулицы = имяулицы;
    }


}