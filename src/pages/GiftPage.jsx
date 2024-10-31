import { openSTXTransfer } from "@stacks/connect";
import React from "react";
import { useState } from "react";
import { useTransactionStatus } from "../hooks/useTransactionStatus";

export default function GiftPage() {
  const [recipient, setRecipient] = useState("");
  const [giftType, setGiftType] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const { trackTransaction, status } = useTransactionStatus();

  const handleTransfer = function (e) {
    e.preventDefault();

    openSTXTransfer({
      recipient,
      amount,
      network: "testnet",
      memo: message || "",
      appDetails: {
        name: "/GiftStacks/",
      },

      onFinish: function (data) {
        trackTransaction(data.txId);
      },
    });
  };

  return (
    <section className="min-h-screen animated-gradient px-20 flex flex-col items-center justify-center gap-8">
      {status !== "pending" && (
        <p className="self-end px-4 py-2 bg-blue-700 text-white text-13 text-center border-t-4 border-t-white">
          {status === "success"
            ? "Transaction was successful"
            : "Transaction Failed"}
        </p>
      )}
      <form
        action=""
        className="flex flex-col items-stretch gap-3 w-2/5 text-18"
        onSubmit={handleTransfer}
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
          required
        />

        <label htmlFor="select-gift-type" className="font-medium">
          Select Gift Type
        </label>
        <select
          id="select-gift-type"
          className="mb-6 p-6 outline-none rounded-lg text-16 bg-white bg-opacity-60"
          value={giftType}
          onChange={(e) => setGiftType(e.target.value)}
          required
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

        <button className="bg-blue-700 py-4 text-white font-semibold rounded-lg">
          Send Gift
        </button>
      </form>
    </section>
  );
}
