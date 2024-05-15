def to_binary(number):
    binary = []
    while number > 0:
        binary.append((number % 2).__str__())
        number //= 2
    print("".join(binary.__reversed__()))


def to_octal(number):
    octal = []
    while number > 0:
        octal.append((number % 8).__str__())
        number //= 8
    print("".join(octal.__reversed__()))


def to_hexadecimal(number:int):
    hexadecimal = []
    hexa_map = {
        10: "A",
        11: "B",
        12: "C",
        13: "D",
        14: "E",
        15: "F",
    }

    while number > 0:
        number_to_append = number % 16
        if number_to_append > 9 and number_to_append < 16:
            hexadecimal.append(hexa_map[number_to_append])
        else:
            hexadecimal.append(number_to_append.__str__())
        number //= 16
    print("".join(hexadecimal.__reversed__()))
