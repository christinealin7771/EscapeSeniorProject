using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HintMenu : MonoBehaviour
{
    public bool hintClicked = false;

    public GameObject hintMenuObject;
    public GameObject hintButtonObject;
    public GameObject pauseButtonObject;
    public GameObject muteObject;
    public GameObject musicObject;
    public GameObject AudioObject;


    private MouseLookAround mouseLookScript;

    public TMPro.TextMeshProUGUI[] hintTextObjects;
    // Start is called before the first frame update
    void Start()
    {
        DontDestroyOnLoad(gameObject);
        hintMenuObject.SetActive(false);

        mouseLookScript = Camera.main.GetComponent<MouseLookAround>();
    }

    // Update is called once per frame
    void Update()
    {
        mouseLookScript = Camera.main.GetComponent<MouseLookAround>();
        // if (hintClicked == true) {

        // }
    }

    public void hintClickedFunc()
    {
        hintClicked = !hintClicked;

        hintMenuObject.SetActive(hintClicked);
        hintButtonObject.SetActive(!hintClicked);
        pauseButtonObject.SetActive(!hintClicked);

        if (AudioObject.GetComponent<AudioManagerScript>().pauseMusic){
            musicObject.SetActive(!hintClicked);
        }
        else {
            muteObject.SetActive(!hintClicked);
        }
        
        
        // pauseMusic.pauseGame();

        for (int i = 0; i < 3; i++) {
            hintTextObjects[i].text = "Hint " + (i+1).ToString();
        }

        if(mouseLookScript != null)
        {
            mouseLookScript.ToggleCameraPause(hintClicked);
        }
        

    }


}
