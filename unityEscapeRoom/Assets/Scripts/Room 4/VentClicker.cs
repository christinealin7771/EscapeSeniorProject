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
        amongus.GetComponent<Renderer>().enabled = true;
    }


}
