import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import TodoPage from "./TodoPage";


describe('todoPage', ()=>{
    it('タイトルが表示される', ()=>{
        //When
        render(<TodoPage />)
        //Then
        expect(screen.getByText('TodoApp チュートリアル')).toBeInTheDocument()
    })
})
