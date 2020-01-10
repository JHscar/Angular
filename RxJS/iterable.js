const item = "fastcampus";

const fastcampusIterable = {
    [Symbol.iterator]() {
        let i = 0;
        return {
            next() {
                const value = item[i];
                i++;
                const done = i > item.length;
                return {
                    value, done
                }
            }
        }
    }
}

for (const v of fastcampusIterable) {
    console.log(v);
}

const newArraty = ["!", ...fastcampusIterable, "!"]
console.log(newArraty);

const f = fastcampusIterable[Symbol.iterator]();
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());