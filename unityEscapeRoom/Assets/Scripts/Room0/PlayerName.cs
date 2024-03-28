using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using System.Runtime.InteropServices;
using UnityEngine.SceneManagement;


public class PlayerName : MonoBehaviour
{
    public string saveName;
    public TMPro.TextMeshProUGUI inputText;

    [DllImport("__Internal")]
    private static extern void StartGame (string username);
    // Start is called before the first frame update
    void Start()
    {
        DontDestroyOnLoad(gameObject);
    }

    // Update is called once per frame
    void Update()
    {
    
    }

    public void SetName() 
    {
        saveName = inputText.text;
        // Use PlayerPrefs.GetString("username") to fetch back this data
        PlayerPrefs.SetString("username", saveName);
        Debug.Log(saveName);

        #if UNITY_WEBGL == true && UNITY_EDITOR == false
            StartGame (saveName);
        #endif

        int randomRoom = Random.Range(1, 4);   // creates a number between 1 and 3
        SceneManager.LoadScene("Room 1." + randomRoom + " - Marston");

    }
}
