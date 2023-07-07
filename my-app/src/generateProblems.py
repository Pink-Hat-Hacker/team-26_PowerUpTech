from flask import Flask, jsonify
import random
from flask_cors import CORS
from Students import Student

app = Flask(__name__)
CORS(app)

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

    addition_problems = problems["addition"]
    subtraction_problems = problems["subtraction"]
    division_problems = problems["division"]
    multiplication_problems = problems["multiplication"]

    student = Student("Matthew Hansen", str(21), str(12))
    test = []
    answers = []

    # create the students' test
    def createTest():
        add_iterator = int(student.add * 16)
        for i in range(0, add_iterator):
            problem = addition_problems[random.randint(0, 99)]
            arr = problem.split(" = ")
            question = arr[0]
            answer = arr[1]
            test.append(question)
            answers.append(answer)
        sub_iterator = int(student.subtract * 16)
        for i in range(0, sub_iterator):
            problem = subtraction_problems[random.randint(0, 99)]
            arr = problem.split(" = ")
            question = arr[0]
            answer = arr[1]
            test.append(question)
            answers.append(answer)
        mul_iterator = int(student.multi * 16)
        for i in range(0, mul_iterator):
            problem = multiplication_problems[random.randint(0, 99)]
            arr = problem.split(" = ")
            question = arr[0]
            answer = arr[1]
            test.append(question)
            answers.append(answer)
        div_iterator = int(student.div * 16)
        for i in range(0, div_iterator):
            problem = division_problems[random.randint(0, 99)]
            arr = problem.split(" = ")
            question = arr[0]
            answer = arr[1]
            test.append(question)
            answers.append(answer)
        if len(test) < 16:
            for i in range(0, (16-len(test))):
                problem = division_problems[random.randint(0, 99)]
                arr = problem.split(" = ")
                question = arr[0]
                answer = arr[1]
                test.append(question)
                answers.append(answer)

    createTest()
    
    return jsonify({
        "test": test,
        "answers": answers
    })

if __name__ == '__main__':
    app.run(debug=True, port=8001)
