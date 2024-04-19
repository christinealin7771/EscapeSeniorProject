using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VentClicker : MonoBehaviour
{
    public GameObject amongus;
    // Start is called before the first frame update
    void Start()
    {
        amongus.GetComponent<Renderer>().enabled = false;
    }

    // Update is called once per frame
    void Update()
    {

    }

    private void OnMouseDown() {
        Debug.Log("Clicked");
        amongus.GetComponent<Renderer>().enabled = true;

        StartCoroutine(RemoveAfterSeconds(5));
    }

    IEnumerator RemoveAfterSeconds (int seconds){
        yield return new WaitForSeconds(seconds);
        amongus.GetComponent<Renderer>().enabled = false;
    }


}
