export default interface StateProp<T> {
    value: T;
    set: (value: T) => void;
}