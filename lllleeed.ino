// Random LED Blink Example
int ledPin = 13; // Built-in LED pin
int delayTime;

void setup() {
  pinMode(ledPin, OUTPUT);
  randomSeed(analogRead(0)); // Initialize random generator
}

void loop() {
  // Generate a random delay between 100ms and 1000ms
  delayTime = random(100, 1001);
  
  digitalWrite(ledPin, HIGH); // Turn LED on
  delay(delayTime);
  
  digitalWrite(ledPin, LOW); // Turn LED off
  delay(delayTime);
}