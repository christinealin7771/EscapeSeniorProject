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
        sceneHintMap.Add("Room 1.1 - Marston", new string[] { "Look at the beautiful art!", "Enumerate the poem’s bright details.", "Technology may bring balance and order." });
        sceneHintMap.Add("Room 2.1 - Reitz Union", new string[] { "Let's go bowling first! What's your score?", "What color connects it all?", "Never forget your math especially PEMDAS!" });
        sceneHintMap.Add("Room 3 - Southwest Rec", new string[] { "First you need a good workout…", "Time is of the essence!", "All about the numbers, look around the room." });
        sceneHintMap.Add("Room 4 - Malachowsky Hall", new string[] { "The fuses have short-circuited, they do not work.", "Observe the sentence for something off.", "One entire binary number." });
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
