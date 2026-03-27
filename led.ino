int led = 13;
int buzzer = 8;

void setup() {
  pinMode(led, OUTPUT);
  pinMode(buzzer, OUTPUT);
}

void loop() {
  digitalWrite(led, HIGH);
  digitalWrite(buzzer, HIGH);
  delay(1000);

  digitalWrite(led, LOW);
  digitalWrite(buzzer, LOW);
  delay(1000);
}