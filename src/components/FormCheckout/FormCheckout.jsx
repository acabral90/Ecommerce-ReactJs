import React from 'react'
import { useState } from 'react'

function FormCheckout({onHandleCheckout}) {

    const [userData, setUserData] = useState({
        name: "",
        phone: "",
        email: "",
        adress: "",
        province: "",
        city: "",
    })

        function onInputChange(evt) {
            let value = evt.target.value;
            let inputName = evt.target.name;
        
            let newState = { ...userData };
            
            newState[inputName] = value;
            setUserData(newState);
        }
        
        function onSubmit(evt) {
            evt.preventDefault();
            console.log(`Gracias por tu compra!`);
        }

        function formIsInvalid() {
            return !(
            userData.name !== "" &&
            userData.phone !== "" &&
            userData.email !== "" &&
            userData.adress !== "" &&
            userData.province !== "" &&
            userData.city !== "" 
            );
        }

  return (
    <form onSubmit={onSubmit}>
     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog">
         <div class="modal-content">
           <div class="modal-header">
             <h1 class="modal-title fs-5" id="exampleModalLabel">Finalizar compra</h1>
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">
             <div class="form-floating mb-3">
               <input type="text" name="name" class="form-control nombreYapellido" onChange={onInputChange}/>
               <label>Nombre y Apellido</label>
             </div>
             <div class="form-floating mb-3">
               <input type="text" name="adress" class="form-control domicilio" onChange={onInputChange}/>
               <label>Domicilio</label>
             </div>
             <div class="row g-3 mb-3">
               <div class="form-floating col-md-8">
                 <input type="text" name="city" class="form-control localidad" onChange={onInputChange}/>
                 <label>Localidad</label>
               </div>
               <div class="form-floating col-md-4">
                 <input type="text" name="province" class="form-control provincia" onChange={onInputChange}/>
                 <label>Provincia</label>
               </div>
             </div>
             <div class="form-floating mb-3">
               <input type="email" name="email" class="form-control email" onChange={onInputChange}/>
               <label>Correo electrónico</label>
             </div>
             <div class="form-floating mb-3">
               <input type="email" name="phone" class="form-control email" onChange={onInputChange}/>
               <label>Telefono</label>
             </div>

           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
             <button type="submit" class="btn btn-warning" data-bs-dismiss="modal" onClick= {(evt) => onHandleCheckout(evt, userData)} disabled={formIsInvalid()}>Comprar</button>
           </div>
         </div>
       </div>
     </div>
   </form>

  )
}

export default FormCheckout