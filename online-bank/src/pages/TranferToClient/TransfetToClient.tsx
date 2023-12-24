// import React, { useState } from "react";
// import {
//   Button,
//   GoBackBtn,
//   SectionHeader,
//   Typography,
//   Wrapper,
// } from "components/UI";
// import { AmountInput, CardSelect } from "components/index";
// import { UserCard } from "type";

// interface TransferFormProps {
//   products: UserCard[];
// }

// export const TransferToClient: React.FC<TransferFormProps> = ({ products }) => {
//   const [amount, setAmount] = useState(0);

//   return (
//     <div className="page transfer-page">
//       <Wrapper>
//         <section>
//           <SectionHeader size="big">
//             {" "}
//             <GoBackBtn />
//             <span> Transfer to client</span>
//           </SectionHeader>
//           <form>
//             <Typography text="* — fields are required" />

//             <CardSelect
//               name="fromCard"
//               label="From card"
//               options={products}
//               selectCard={products[0]}
//               handleSelect={() => setAmount()}
//             />

//             <AmountInput
//               amount={amount}
//               currency={fromCard.currency}
//               errors={errors}
//               removeErrors={removeTransferErrors}
//               updateErrors={updateTransferErrors}
//               handleAmountChange={updateForm}
//             />

//             <Button
//               size="big"
//               color="green"
//               title="Submit"
//               clickHandler={hanldeConfirm}
//             />
//           </form>
//         </section>
//       </Wrapper>
//     </div>
//   );
// };
