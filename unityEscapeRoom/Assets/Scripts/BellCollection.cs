using UnityEngine;



public class BellCollection : MonoBehaviour
{
    public string correctSequence;
    private string clickedBells = "";
    public Clock clockObject;
    public AudioSource correctBellAudio;
    private bool bellsSolved = false;

    private void Start() 
    {
        clickedBells = "";
    }
    
    public void BellClicked(string bellIndex)
    {
        clickedBells += bellIndex;
        Debug.Log(clickedBells);

        if (clickedBells.Length >= correctSequence.Length) {
            if (clickedBells == correctSequence) {
                Debug.Log("Correct bell output!");
                if (bellsSolved == false) {
                    TriggerAction();
                }

            }
            else {
                Debug.Log("Incorrect sequence!");
                ResetBells();
            }
        }
        else { //Dynamically check if the bells thus far are correct
            int currentLength = clickedBells.Length;
            string currentSequence = correctSequence.Substring(0, currentLength);
            if (clickedBells == currentSequence) {
                Debug.Log("Correct thus far!");
            }
            else {
                Debug.Log("Incorrect bell clicked!");
                ResetBells();
            }
        }

    }

    void ResetBells() {
        clickedBells = clickedBells.Substring(1, 1);
    }


    void TriggerAction()
    {
        bellsSolved = true;
        Debug.Log("Correct sequence clicked! Triggering action...");
        gameObject.GetComponent<AudioSource>().Play();
        clockObject.realTime = false;
        clockObject.clockSpeed = 0;
        clockObject.minutes = 25;
        clockObject.hour = 9;
        clockObject.seconds = 25;
    }
}