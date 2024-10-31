import React from "react";
import { useState } from "react";

export default function GiftPage() {
  const [recipient, setRecipient] = useState("");
  const [giftType, setGiftType] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="h-screen animated-gradient flex items-center justify-center">
      <form
        action=""
        className="flex flex-col items-stretch gap-3 w-2/5 text-18"
      >
        <label htmlFor="recipient-wallet-address" className="font-medium">
          Recipient Wallet Address
        </label>
        <input
          type="text"
          id="recipient-wallet-address"
          className="mb-6 p-6 outline-none rounded-lg text-16 bg-white bg-opacity-60"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />

        <label htmlFor="select-gift-type" className="font-medium">
          Select Gift Type
        </label>
        <select
          id="select-gift-type"
          className="mb-6 p-6 outline-none rounded-lg text-16 bg-white bg-opacity-60"
          value={giftType}
          onChange={(e) => setGiftType(e.target.value)}
        >
          <option value=""></option>
          <option value="STX Tokens">STX Tokens</option>
          <option value="NFT">NFT</option>
        </select>

        {giftType === "STX Tokens" && (
          <>
            <label htmlFor="stx-amount">STX Token</label>
            <input
              type="number"
              id="stx-amount"
              className="mb-6 p-6 outline-none rounded-lg text-16 bg-white bg-opacity-60"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </>
        )}

        <label htmlFor="add-personal-message" className="font-medium">
          Add Personal Message
        </label>
        <textarea
          id="add-personal-message"
          className="mb-6 p-6 outline-none rounded-lg text-16 h-64 bg-white bg-opacity-60"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button className="bg-secondary py-4 text-white font-semibold rounded-lg">
          Send Gift
        </button>
      </form>
    </section>
  );
}
