from flask import Flask, jsonify
import json
import random

app = Flask(__name__)

@app.route('/generateProblems', methods=['GET'])
def generateMath():
    problems = {
        "addition": [],
        "subtraction": [],
        "division": [],
        "multiplication": []
    }

    # Generate 100 addition problems
    for _ in range(100):
        num1 = random.randint(1, 100)
        num2 = random.randint(1, 100)
        result = num1 + num2
        problems["addition"].append(f"{num1} + {num2} = {result}")

    # Generate 100 subtraction problems
    for _ in range(100):
        num1 = random.randint(1, 100)
        num2 = random.randint(1, num1)
        result = num1 - num2
        problems["subtraction"].append(f"{num1} - {num2} = {result}")

    # Generate 100 division problems
    for _ in range(100):
        result = random.randint(1, 100)
        divisor = random.randint(1, 10)
        dividend = result * divisor
        problems["division"].append(f"{dividend} / {divisor} = {result}")

    # Generate 100 multiplication problems
    for _ in range(100):
        num1 = random.randint(1, 10)
        num2 = random.randint(1, 10)
        result = num1 * num2
        problems["multiplication"].append(f"{num1} * {num2} = {result}")

    # # Accessing the problems
    addition_problems = problems["addition"]
    # subtraction_problems = problems["subtraction"]
    # division_problems = problems["division"]
    # multiplication_problems = problems["multiplication"]
    
    return jsonify(addition_problems)

if __name__ == '__main__':
    app.run(debug=True, port=8001)
