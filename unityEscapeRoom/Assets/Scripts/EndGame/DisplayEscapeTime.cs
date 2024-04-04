using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;
using UnityEngine.SceneManagement;

public class DisplayEscapeTime : MonoBehaviour
{
    // public string timerText;
    public TMPro.TextMeshProUGUI escapeTime;

    // Start is called before the first frame update
    void Start()
    {
        // escapeTime = Convert.ToString(PlayerPrefs.GetString("escapeTime"));
    }

    // Update is called once per frame
    void Update()
    {
        escapeTime.text = Convert.ToString(PlayerPrefs.GetString("escapeTime")) + " Secs";
        Debug.Log(escapeTime.text);

         // Get the current scene name
        string currentSceneName = SceneManager.GetActiveScene().name;
        if (currentSceneName == "EndScreen"){
            Destroy(GameObject.Find("PauseButtonCanvas"));
        }

    }
}
