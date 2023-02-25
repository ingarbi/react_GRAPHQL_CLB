import { type } from "os";
import React from "react";
import { useState } from "react";

export type AppProps = {
  customerId: number;
};

function AddOrder({ customerId }: AppProps) {
  const [active, setActive] = useState(false);
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState<number>(NaN);
  return (
    <div>
      {active ? null : (
        <button
          onClick={() => {
            setActive(true);
          }}
        >
          New Order
        </button>
      )}
      {active ? (
        <div>
          {" "}
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div>
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="cost">Cost:</label>
              <input
                type="number"
                id="cost"
                value={isNaN(cost) ? "" : cost}
                onChange={(e) => {
                  setCost(parseFloat(e.target.value));
                }}
              />
            </div>
            <br />

            {/* <button disabled={createCustomerLoading ? true : false}>
              Add Customer
            </button>
            {createCustomerError ? <p>Error creating customer</p> : null} */}
            <button>Add order</button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default AddOrder;
