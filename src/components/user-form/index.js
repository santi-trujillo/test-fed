import React from "react";
import "./styles.css"; 

const UserForm = () => {
    return (<form>
    <ul class="ul">
      <li>
        <i class="fas fa-user-edit iconoInput"></i>
        <input type="text" class="form-control inputPadding" placeholder="Nombre" />
      </li>
      <li>
        <i class="fas fa-user-edit iconoInput"></i>
        <input type="text" class="form-control inputPadding" placeholder="Apellidos" />
      </li>
      <li>
        <i class="fas fa-user-edit iconoInput"></i>
        <input type="email" class="form-control inputPadding" placeholder="Correo Eléctronico" />
      </li>
      <li>
        <i class="fas fa-user-edit iconoInput"></i>
        <input type="tel" class="form-control inputPadding" placeholder="Número de teléfono" />
      </li>
      <li>
        <i class="fas fa-user-edit iconoInput"></i>
        <input type="text" class="form-control inputPadding" placeholder="Código postal" />
      </li>
      <li>
        <i class="fas fa-user-edit iconoInput"></i>
        <input type="text" class="form-control inputPadding" placeholder="Colonia" />
      </li>
      <li>
        <i class="fas fa-user-edit iconoInput"></i>
        <input type="text" class="form-control inputPadding" placeholder="Estado/Región" />
      </li>
      <li>
        <i class="fas fa-user-edit iconoInput"></i>
        <input type="text" class="form-control inputPadding" placeholder="Ciudad" />
      </li>
      <li>
        <i class="fas fa-user-edit iconoInput"></i>
        <input type="text" class="form-control inputPadding" placeholder="Delegación o municipio" />
      </li>              
      <li>
        <i class="fas fa-user-edit iconoInput"></i>
        <input type="text" class="form-control inputPadding" placeholder="Calle" />
      </li>
    </ul>
    <input type="button" id="boton-libreta" value="Libreta de direcciones"/>
    <input type="button" id="boton-guardar" value="Guardar"/>
  </form>)
};

export default UserForm;