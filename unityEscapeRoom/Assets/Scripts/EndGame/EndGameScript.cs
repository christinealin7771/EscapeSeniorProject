using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;
using System;

public class NewBehaviourScript : MonoBehaviour
{
    public GameObject nextDoor;
    // Start is called before the first frame update
    [DllImport("__Internal")]
    private static extern void EndGame (string username, string userEscapeTime);

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
       
    }

    public void OnMouseDown() 
    {
        if(nextDoor.GetComponent<DoorHandler>().doorLocked == false){
             // string name = GameObject.Find("PlayerName").GetComponent<PlayerName>().saveName;
            string name = PlayerPrefs.GetString("username");
            Debug.Log(name);

            GameObject.Find("PauseButtonCanvas").GetComponent<StartTimer>().gamePaused = true;

            string escapeTime = Convert.ToString(PlayerPrefs.GetString("escapeTime"));
            Debug.Log(escapeTime);

            // saveName = inputText.text;
            // // Use PlayerPrefs.GetString("username") to fetch back this data
            // PlayerPrefs.SetString("username", saveName);
            // Debug.Log(saveName);

            #if UNITY_WEBGL == true && UNITY_EDITOR == false
                EndGame(name, escapeTime);
            #endif
        }
    }
}
