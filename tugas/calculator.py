from tkinter import *

expression = ""

def press(num):
    global expression
    expression += str(num)
    equation.set(expression)

def equalpress():
    try:
        global expression
        total = str(eval(expression))
        equation.set(total)
        expression = ""
    except:
        equation.set("error")
        expression = ""

def clear():
    global expression
    expression = ""
    equation.set("")

# Inisialisasi GUI
root = Tk()
root.title("Calculator")

equation = StringVar()
expression_field = Entry(root, textvariable=equation)
expression_field.grid(columnspan=4, ipadx=70)

# Tombol angka
button_list = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    'C', '0', '=', '+'
]

row = 1
col = 0
for button_text in button_list:
    Button(root, text=button_text, width=10, command=lambda button_text=button_text: press(button_text) if button_text != '=' else equalpress() if button_text != 'C' else clear()).grid(row=row, column=col)
    col += 1
    if col > 3:
        col = 0
        row += 1

root.mainloop()
