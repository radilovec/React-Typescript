import { useState } from "react";
import { Button } from "../button/Button";
import { Output } from "../output/Output";
import styles from "./App.module.css";
import { evaluate } from "mathjs";

export const App: React.FC = () => {
  const [expr, setExpr] = useState<string>("");

  const ALLOWED_VALUES = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "×",
    "÷",
    "%",
    "=",
    ".",
    "(",
    ")",
    "С",
  ];

  const handleClick = (value: string) => {
    if (value === "С") {
      setExpr("");
    } else if (value === "=") {
      try {
        const result = evaluateExpression(expr);
        setExpr(result);
      } catch (err) {
        setExpr("");
        alert(err);
      }
    } else {
      setExpr((prev) => prev + value);
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    if (value === "" || ALLOWED_VALUES.includes(value.slice(-1))) {
      setExpr(value);
    }
  };

  const evaluateExpression = (expr: string) => {
    try {
      const sanitizedExpression = expr.replace(/×/g, "*").replace(/÷/g, "/");
      return evaluate(sanitizedExpression).toString();
    } catch (error) {
      throw new Error("Неверное выражение");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.calculator}>
        <div className={styles.output}>
          <Output expression={expr} onChange={handleChange} />
        </div>
        <div className={styles.buttons}>
          <div>
            <Button value="(" onClick={handleClick} type="operator" />
            <Button value=")" onClick={handleClick} type="operator" />
            <Button value="%" onClick={handleClick} type="operator" />
            <Button value="С" onClick={handleClick} type="clear" />
          </div>
          <div>
            <Button value="7" onClick={handleClick} type="number" />
            <Button value="8" onClick={handleClick} type="number" />
            <Button value="9" onClick={handleClick} type="number" />
            <Button value="÷" onClick={handleClick} type="operator" />
          </div>
          <div>
            <Button value="4" onClick={handleClick} type="number" />
            <Button value="5" onClick={handleClick} type="number" />
            <Button value="6" onClick={handleClick} type="number" />
            <Button value="×" onClick={handleClick} type="operator" />
          </div>
          <div>
            <Button value="1" onClick={handleClick} type="number" />
            <Button value="2" onClick={handleClick} type="number" />
            <Button value="3" onClick={handleClick} type="number" />
            <Button value="-" onClick={handleClick} type="operator" />
          </div>
          <div>
            <Button value="0" onClick={handleClick} type="number" />
            <Button value="." onClick={handleClick} type="number" />
            <Button value="=" onClick={handleClick} type="equal" />
            <Button value="+" onClick={handleClick} type="operator" />
          </div>
        </div>
      </div>
    </div>
  );
};
