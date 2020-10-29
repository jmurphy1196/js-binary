const combineMap = (a1, a2, fn) => {
    return a1.map((x, i) => fn(x, a2[i]));
}

class Binary {
    constructor(bits){
        this.bits = bits;

    }
    toNumber(){
        let total = 0;
        this.bits.forEach((bit, i) => {
            const power = this.bits.length - i - 1;
            if(bit === 1){
                total += 2**power;
            }
        })
        return total;
    }
    isBinary(binaryNumber){
        if(!(binaryNumber instanceof Binary)){
            //not a binary number
            throw new Error("Not a valid binary number!")
        }
    }
    sameNumberOfBits(binaryNumber){
        if(binaryNumber.bits.length !== this.bits.length){
            // bits are not same length
            throw new Error(`bits do not match ${binaryNumber.bits.length} | ${this.bits.length}`)
        }
    }
    and(binaryNumber){
        this.isBinary(binaryNumber);
        this.sameNumberOfBits(binaryNumber);
        const newBits = combineMap(this.bits, binaryNumber.bits, (bit1, bit2) => bit1 & bit2);
        return new Binary(newBits)

    }
}

const fiveBitNumber = new Binary([1,1,1,0,0]);
const secondFiveBitNumber = new Binary([1,0,1,1,1]);

const newBinary = fiveBitNumber.and(secondFiveBitNumber);
console.log(newBinary)