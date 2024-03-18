def PalindromeCreator(strParam):
    # Función para verificar si una cadena es un palíndromo
    def is_palindrome(s):
        return s == s[::-1]

    # Verificar si la cadena de entrada es un palíndromo
    if is_palindrome(strParam):
        return "palindrome"

    # Intentar eliminar un carácter para ver si se convierte en un palíndromo
    for i in range(len(strParam)):
        temp = strParam[:i] + strParam[i+1:]
        if is_palindrome(temp):
            return strParam[i]  # Devolver el carácter eliminado

    # Intentar eliminar dos caracteres para ver si se convierte en un palíndromo
    for i in range(len(strParam)):
        for j in range(i+1, len(strParam)):
            temp = strParam[:i] + strParam[i+1:j] + strParam[j+1:]
            if is_palindrome(temp):
                return strParam[i] + strParam[j]  # Devolver los caracteres eliminados en orden

    # Si no se puede crear ningún palíndromo eliminando hasta dos caracteres
    return "not possible"

# Testing the word "kjjjhjjj"
test_word = "kjjjhjjj"
result = PalindromeCreator(test_word)
print(f"Result for '{test_word}': {result}")



print(PalindromeCreator('kjjjhjjj'))