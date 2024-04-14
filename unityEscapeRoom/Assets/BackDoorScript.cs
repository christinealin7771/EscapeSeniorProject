using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
public class BackDoorScript : MonoBehaviour
{
    private void OnMouseDown() 
    {
        SceneManager.LoadScene(CurrentRoom.roomBuildList[CurrentRoom.counter]);
    }
}
