using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class HintText : MonoBehaviour
{
    public Dictionary<string, string[]> sceneHintMap = new Dictionary<string, string[]>(); 
    public TMPro.TextMeshProUGUI[] hintTextObjects;
    // Start is called before the first frame update
    void Start()
    {
        sceneHintMap.Add("Room 1.1 - Marston", new string[] { "Focus on the colors on the computer", "Identify the line number for each color.", "The computer also distinguishes the color order." });
        sceneHintMap.Add("Room 1.2 - Marston", new string[] { "Focus on the colors on the computer", "Identify the line number for each color.", "The computer also distinguishes the color order." });
        sceneHintMap.Add("Room 1.3 - Marston", new string[] { "Focus on the colors on the computer", "Identify the line number for each color.", "The computer also distinguishes the color order." });
        sceneHintMap.Add("Room 2.1 - Reitz Union", new string[] { "Let's go bowling first! What is the missing numbers?", "What color connects it all?", "Never forget your math especially PEMDAS!" });
        sceneHintMap.Add("Room 3 - Southwest Rec", new string[] { "Spelling out a good workout is better than digits", "Time is of the essence!", "Look around the room and you have already set the minutes." });
        sceneHintMap.Add("Room 4 - Malachowsky Hall", new string[] { "The fuses have short-circuited, they do not work.", "Observe the sentence for something strange.", "One entire binary number." });
        sceneHintMap.Add("Room 5 - Century Tower", new string[] { "The Emperor has a hidden message for your eyes only…", "With the hidden rule, perform the song for the audience.", "Time is up! The clock’s ringing says it has ended." });
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void SelectHint(int hintNum) 
    {
  
        // Get the current scene name
        string currentSceneName = SceneManager.GetActiveScene().name;
        // Check if the current scene name exists in the map
        if (sceneHintMap.ContainsKey(currentSceneName))
        {
            // Update the hint text with one of the texts from the array corresponding to the current scene
            // hintTextObject.gameObject.SetActive(true);
            string[] hints = sceneHintMap[currentSceneName];
            if (hints.Length > 0)
            {
                // int randomIndex = Random.Range(0, hints.Length); // Pick a random hint

                // hintTextObject.text = hints[randomIndex];

                // hintTextObject1.text = hints[0];
                // hintTextObject2.text = hints[1];
                // hintTextObject3.text = hints[2];
                hintTextObjects[hintNum-1].text = hints[hintNum-1];
            }
            else
            {
                Debug.LogWarning("No hint available for scene: " + currentSceneName);
            }
        }
        else
        {
            Debug.LogWarning("No hint available for scene: " + currentSceneName);
        }
    }
}
