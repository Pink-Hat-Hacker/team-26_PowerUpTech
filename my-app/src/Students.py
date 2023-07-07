#Students .py File
# test will have 16 problems
class Student:
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade
        self.testScores = []
        self.add = 0.25
        self.subtract = 0.25
        self.multi = 0.25
        self.div = 0.25
    
    def toString(self):
        print("Hello my name is " + self.name + ". I am " + self.age + " years old, and I am in grade " + self.grade)
        # print this last person test score for each operand if you have time        
        print(self.add, self.subtract, self.multi, self.div)

    # test score will be an array of length 4, containing each operands' score
    def recordTest(self, testScore):
        self.testScores.append(testScore)

    def changePercentages(self, operand, amount):
        # 0 -> increase Addition, 1 -> increase Subtraction, 2 -> increase Multi, else -> Division
        removed = (amount/3)
        if operand == 0:
            self.add += amount
            self.subtract -= removed
            self.multi -= removed
            self.div -= removed
        elif operand == 1:
            self.subtract += amount
            self.multi -= removed
            self.div -= removed
            self.add -= removed
        elif operand == 2:
            self.multi += amount
            self.div -= removed
            self.add -= removed
            self.subtract -= removed
        else:
            self.div += amount
            self.add -= removed
            self.subtract -= removed
            self.multi -= removed
        
        return

    def findMins(self, lst):
        # find the two lowest operands scores of the student
        temp = lst.copy()
        index1 = temp.index(min(temp))
        temp[index1] = 1.1
        index2 = temp.index(min(temp))
        return (index1, index2)
    
    def adjust_personalTest(self):
        if not self.testScores:
            print("This student has not taken a test")
            return
        # grab the operand of the two lowest total scores
        lst = self.findMins(self.testScores[len(self.testScores)-1])

        # change the lowest operand percentage
        if self.testScores[len(self.testScores) - 1][lst[0]] <= 0.75 and self.testScores[len(self.testScores) - 1][lst[0]] >= 0.65:
            self.changePercentages(lst[0], 0.1)
        elif self.testScores[len(self.testScores) - 1][lst[0]] <= 0.64 and self.testScores[len(self.testScores) - 1][lst[0]] >= 0.55:
            self.changePercentages(lst[0], 0.2)
        elif self.testScores[len(self.testScores) - 1][lst[0]] < 0.55:
            self.changePercentages(lst[0], 0.3)
        
        #change the 2nd lowest operand percentage
        if self.testScores[len(self.testScores) - 1][lst[1]] <= 0.75 and self.testScores[len(self.testScores) - 1][lst[1]] >= 0.65:
            self.changePercentages(lst[1], 0.1)
        elif self.testScores[len(self.testScores) - 1][lst[1]] <= 0.64 and self.testScores[len(self.testScores) - 1][lst[1]] >= 0.55:
            self.changePercentages(lst[1], 0.2)
        elif self.testScores[len(self.testScores) - 1][lst[1]] < 0.55:
            self.changePercentages(lst[1], 0.3)

        if self.add < 0:
            self.add = 0
        if self.subtract < 0:
            self.subtract = 0
        if self.multi < 0:
            self.multi = 0
        if self.div < 0:
            self.div = 0
        
        return

# MatthewHansen = Student("Matthew Hansen", str(21), str(12))
# MatthewHansen.toString()
# MatthewHansen.recordTest([.8,.8,.5,.5])
# MatthewHansen.adjust_personalTest()
# MatthewHansen.toString()
        
        



