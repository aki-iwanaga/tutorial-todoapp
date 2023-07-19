import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import TodoPage from "./TodoPage";


describe('todoPage', () => {
    beforeEach(() => {
        render(<TodoPage />)
    })
    it('タイトルが表示される', () => {
        expect(screen.getByText('TodoApp チュートリアル')).toBeInTheDocument()
    })

    it('インプット要素が表示される', () =>{
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('登録ボタンが表示される', () => {
        expect(screen.getByRole('button', {name: '登録'})).toBeInTheDocument()
    })

    it('リスト要素が表示される', () => {
        expect(screen.getByRole('list')).toBeInTheDocument()
    })
})
