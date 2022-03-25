import React from "react";
import './calc.css';

export default function calc () {
    return(
        <div class=" align-items-center">
        <calculator>
            <div class="row cont">
                <div class="row output justify-content-around align-items-end d-flex flex-column text-light px-3 py-1">
                    <div class="previous-number"></div>
                    <div class="current-number">0</div>
                </div>
                <div class="row">
                    <button type="button" class="btn btn-primary col-6 rounded-0 all-clear" >AC</button>
                    <button type="button" class="btn btn-primary col-3 rounded-0 delete">DEL</button>
                    <button type="button" class="btn btn-primary col-3 rounded-0 operand">÷</button>   
                </div>
                <div class="row">
                    <button type="button" class="btn btn-primary col-3 rounded-0 number" value={1}>1</button>
                    <button type="button" class="btn btn-primary col-3 rounded-0 number" value={2}>2</button>
                    <button type="button" class="btn btn-primary col-3 rounded-0 number" value={3}>3</button>
                    <button type="button" class="btn btn-primary col-3 rounded-0 operand" >x</button>
                </div>
                <div class="row">
                    <button type="button" class="btn btn-primary col-3 rounded-0 number" value={4}>4</button>
                    <button type="button" class="btn btn-primary col-3 rounded-0 number" value={5}>5</button>
                    <button type="button" class="btn btn-primary col-3 rounded-0 number" value={6}>6</button>
                    <button type="button" class="btn btn-primary col-3 rounded-0 operand">+</button>
                </div>
                <div class="row">
                    <button type="button" class="btn btn-primary col-3 rounded-0 number" value={7}>7</button>
                    <button type="button" class="btn btn-primary col-3 rounded-0 number" value={8}>8</button>
                    <button type="button" class="btn btn-primary col-3 rounded-0 number" value={9}>9</button>
                    <button type="button" class="btn btn-primary col-3 rounded-0 operand">-</button>
                </div>
                <div class="row">
                    <button type="button" class="btn btn-primary col-3 rounded-0 number" value={'.'}>.</button>
                    <button type="button" class="btn btn-primary col-3 rounded-0 number" value={0}>0</button>
                    <button type="button" class="btn btn-primary col-6 rounded-0 equal">=</button>            
                </div>
            </div>
        </calculator>
        </div>
    )
}