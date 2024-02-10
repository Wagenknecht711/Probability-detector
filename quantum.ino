// These constants won't change. They're used to give names to the pins used:
const int analogInPin = A0; //detector outside box
const int analogOutPin = 9;  // Analog output pin that the LED is attached to

int sensorValue = 0;  // value read from the pot
int outputValue = 0;  // value output to the PWM (analog out)
int lastSensorValue = 0; // stores the last output value for comparison

void setup() {
  // initialize serial communications at 9600 bps:
  Serial.begin(9600); //laser attached to TX
}

void loop() {
  // read the analog in value:
  sensorValue = analogRead(analogInPin);
  // map it to the range of the analog out:
  outputValue = map(sensorValue, 0, 1023, 0, 255);
  // change the analog out value:
  analogWrite(analogOutPin, outputValue);
  // calculate the difference in outputValue from the last loop
  int diff = sensorValue - lastSensorValue;

  // only print if there's a change
  if(diff != 0) {
    Serial.println(abs(diff));
    

  }
  delay(50);
  // update the lastOutputValue for the next loop
  lastSensorValue = sensorValue;
  
  // a short delay to ensure serial output readability
  
}
