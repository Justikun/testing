const { returnTwo, greeting, add, multiply, subtract, divide} = require('./functions')

    test('returnTwo should return 2', () => {
        expect(returnTwo()).toBe(2)
    })

    test('greeting should return...', () => {
        expect(greeting("James")).toBe("Hello, James.")
        expect(greeting("Jill")).toBe("Hello, Jill.")
    })

    test('should add two number to return the sum', () => {
        expect(add(1,2)).toBe(3)
        expect(add(5,9)).toBe(14)
    })
    
    describe("Math functions", () => {
        test('should subtract two number', () => {
            expect(subtract(1,2)).toBe(-1)
            expect(subtract(5,1)).toBe(4)
        })

        test('should multiply two number', () => {
            expect(multiply(1,2)).toBe(2)
            expect(multiply(5,2)).toBe(10)
        })
        
        test('should divide two number', () => {
            expect(divide(9,3)).toBe(3)
        })  
    })