'use client'
import { symbols } from "@/app/datas/symbols"
import styles from './Symbol.module.css'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { changeSymbol } from "@/redux/slices/symbolSlice/symbolSlice"
export const Symbols = () => {
    const symbol = useSelector((state: RootState) => state.symbol)
    const dispatch = useDispatch()
    const handleSymbol = (symbol: string) => {
        dispatch(changeSymbol(symbol))
    }
    console.log(symbol)
    return (
        <div>
            <ul className={styles.stylesList}>
                {
                    symbols.map((symbol) => <li key={symbol.id} onClick={() => handleSymbol(symbol.symbol)}>{symbol.title}</li>)
                }
            </ul>
        </div>
    )
}