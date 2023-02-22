import React from 'react'

function FormCheckout({onHandleCheckout}) {
  return (
    <form id="formulario">
     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog">
         <div class="modal-content">
           <div class="modal-header">
             <h1 class="modal-title fs-5" id="exampleModalLabel">Finalizar compra</h1>
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
           </div>
           <div class="modal-body">
             <div class="form-floating mb-3">
               <input type="text" name="nombreYapellido" class="form-control nombreYapellido" id="nombreYapellido" placeholder="nombreYapellido"/>
               <label for="nombreYapellido">Nombre y Apellido</label>
             </div>
             <div class="form-floating mb-3">
               <input type="text" name="domicilio" class="form-control domicilio"  id="domicilio" placeholder="Domicilio"/>
               <label for="domicilio">Domicilio</label>
             </div>
             <div class="row g-3 mb-3">
               <div class="form-floating col-md-8">
                 <input type="text" name="localidad" class="form-control localidad" id="localidad" placeholder="Localidad"/>
                 <label for="localidad">Localidad</label>
               </div>
               <div class="form-floating col-md-4">
                 <input type="text" name="provincia" class="form-control provincia" id="provincia" placeholder="Localidad"/>
                 <label for="provincia">Provincia</label>
               </div>
             </div>
             <div class="form-floating mb-3">
               <input type="email" name="correo" class="form-control email" id="correo" placeholder="name@example.com"/>
               <label for="correo">Correo electrónico</label>
             </div>

           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
             <button type="input" class="btn btn-warning" data-bs-dismiss="modal" id="botonComprar" onClick= {onHandleCheckout}>Comprar</button>
           </div>
         </div>
       </div>
     </div>
   </form>

  )
}

export default FormCheckout