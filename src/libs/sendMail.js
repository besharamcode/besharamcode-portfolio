export const sendMail = async (form) => {
  const send = await fetch(
    "https://farbites-server.onrender.com/biteapi/order/besharamcode",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }
  );
  const response = await send.json();
  return response;
};
