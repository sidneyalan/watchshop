  import { collection, getFirestore, addDoc } from "firebase/firestore";
  import { useState } from "react";
  import Swal from "sweetalert2";

  const SendOrder = () => {
  
    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setConfirm] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name === "" || email === "" || emailConfirm === "") {
        alert("Porfavor complete los campos!!!");
      } else {
        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
        Swal.fire({
          title: "Genial!",
          text: "Su orden de compra ha sido confirmada. Revisa tu correo electrónico para más detalles.",
          icon: "success",
        });
        setEmail(" ");
        setName ( " " );
        setConfirm ( " " );
        setCart ([]);
      }

    };
  
    const db = getFirestore();
    const ordersCollection = collection(db, "orden");
  
    const order = {
      name,
      email,
      emailConfirm,
    };
  
    return (
      <>
      <div className="container-form">

        <h4 className="text-center py-5">Complete el formulario para confirmar su compra</h4>
        <div className="container">
            <form onSubmit={handleSubmit}>

    <div className="row g-3">
    <div className="col-sm-12">
    <label className="form-label"><strong>Apellido y Nombre</strong></label>
    <input type="text" className="form-control" name="apellido" onChange={(e) => setName(e.target.value)}  required />
    <div className="invalid-feedback">Escriba su apellido</div>
    </div>
	  <div className="col-sm-12">
    <label className="form-label"><strong>Email</strong></label>
    <input type="email" className="form-control"  name="email" onChange={(e) => setEmail(e.target.value)}   required />
    <div className="invalid-feedback">Escriba su nombre.</div>
    </div>
    <div className="col-sm-12">
    <label className="form-label"><strong>Confirm su Email</strong></label>
    <input type="email" className="form-control"  name="emailConfirm" onChange={(e) => setConfirm(e.target.value)}   required />
    <div className="invalid-feedback">Escriba su nombre.</div>
    </div>
	</div>
  <button className="w-200 btn btn-dark my-3" type="submit">ENVIAR</button>

  </form>
        </div>
        <div className="idorder">
            <p>Id de la Orden:<br/>
            {orderId}
            </p>
        </div>
      </div>
      </>
    );
  };
  
  export default SendOrder;
  