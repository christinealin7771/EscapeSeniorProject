using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.Tracing;
using UnityEngine;
using UnityEngine.SceneManagement;

public class DoorHandler : MonoBehaviour
{
    public bool doorLocked;
    public string[] roomNameList;
    private Renderer _renderer;
     
    // Start is called before the first frame update
    void Start()
    {
        _renderer = GetComponent<Renderer>();
    }


    private void OnMouseDown() 
    {
        if (doorLocked == false) {
            Debug.Log(doorLocked);
            Debug.Log("Clicked on an unlocked door!");
            
            if(CurrentRoom.roomBuildList[CurrentRoom.counter] != SceneManager.GetActiveScene().buildIndex){
                CurrentRoom.roomBuildList[CurrentRoom.counter] = SceneManager.GetActiveScene().buildIndex;
                CurrentRoom.counter++;
            }
            
            int randomRoom = Random.Range(0, roomNameList.Length);  // creates a number between 0 and 2
            SceneManager.LoadScene(roomNameList[randomRoom]);   // loads one of the three possible rooms
        }
        else {
            Debug.Log(doorLocked);
            Debug.Log("Clicked on a locked door!");
        }
    }
    public void unlockDoor() {
        this.doorLocked = false;
        Debug.Log(doorLocked);
        Debug.Log("Unlock function entered!");
    }
}
