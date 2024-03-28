using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;

public class StartTimer : MonoBehaviour
{
    // public TMPro.TextMeshProUGUI timerText;
    public float timer = 0;
    public bool gamePaused = false;

    public GameObject pauseMenuObject;
    public GameObject pauseButtonObject;
    public GameObject hintButtonObject;
    public GameObject muteObject;
    public GameObject musicObject;
    public GameObject AudioObject;

    private MouseLookAround mouseLookScript;


    // Start is called before the first frame update
    void Start()
    {
        timer = 0;
        DontDestroyOnLoad(gameObject);
        pauseMenuObject.SetActive(false);

        mouseLookScript = Camera.main.GetComponent<MouseLookAround>();
    }

    // Update is called once per frame
    void Update()
    {
        PlayerPrefs.SetString("escapeTime", Convert.ToString(timer));
        mouseLookScript = Camera.main.GetComponent<MouseLookAround>();
        if (gamePaused == false) {
            timer += Time.deltaTime; 
            // Debug.Log(timer);

        }
        // else if(gamePaused == true){
        //     pauseMenuObject.SetActive(true);
        //     // GameObject.Find("Pause_Menu").GetComponent<Renderer>().enabled = true;
        //     // GameObject.Find("Pause_Button").GetComponent<Renderer>().enabled = false;
        // }

    }



    public void PauseTime()
    {
        Debug.Log("Clicked Pause");
        gamePaused = !gamePaused;
        pauseMenuObject.SetActive(gamePaused);
        pauseButtonObject.SetActive(!gamePaused);
        hintButtonObject.SetActive(!gamePaused);

        if (AudioObject.GetComponent<AudioManagerScript>().pauseMusic){
            musicObject.SetActive(!gamePaused);
        }
        else {
            muteObject.SetActive(!gamePaused);
        }

        if(mouseLookScript != null)
        {
            mouseLookScript.ToggleCameraPause(gamePaused);
        }
    }

    // void OnMouseDown()
    // {
    //     Debug.Log("Clicked Pause");
    //     gamePaused = !gamePaused;
    // }
}
